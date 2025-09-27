document.addEventListener('DOMContentLoaded', () => {

    // --- 要素の取得 ---
    const homeScreen = document.getElementById('home-screen');
    const timelineScreen = document.getElementById('timeline-screen');
    const regionSelectorContainer = document.getElementById('region-selector-container');
    const generateTimelineBtn = document.getElementById('generate-timeline-btn');
    const timelineTitle = document.getElementById('timeline-title');
    const timelineLayoutContainer = document.getElementById('timeline-layout-container');
    const timeAxisContainer = document.getElementById('time-axis-container');
    const nationsWrapper = document.getElementById('nations-wrapper');
    const nationNumbersContainer = document.getElementById('nation-numbers-container');
    const timeAxis = document.getElementById('time-axis');
    const zoomLevelSpan = document.getElementById('zoom-level');
    const timelineViewport = document.getElementById('timeline-viewport');
    const gridLinesContainer = document.getElementById('grid-lines');
    const toggleRulersBtn = document.getElementById('toggle-rulers');
    const subModeButton = document.getElementById('sub-mode-button');
    const toggleCompactBtn = document.getElementById('toggle-compact-btn');
    const modal = document.getElementById('modal');
    const modalName = document.getElementById('modal-name');
    const modalDetailsContainer = document.getElementById('modal-details-container');
    const showNextDetailBtn = document.getElementById('show-next-detail');

    let currentZoom = 1.0;
    let minYear, maxYear;
    let currentFilteredNations = [];
    let currentRegionKeys = [];
    let isRulerMode = false;
    let currentSubMode = 'none';
    let isNameVisible = false;
    let isCompactMode = false;

    const subModes = ['none', 'peo', 'ev', 'sys', 'tho'];
    const subModeLabels = {
        none: '国家', peo: '人物',
        ev: '史実', sys: '制度', tho: '思想'
    };

    function init() { createRegionButtons(); setupEventListeners(); }

    function createRegionButtons() {
        const allBtn = document.createElement('button'); allBtn.className = 'region-button'; allBtn.textContent = regions['all'].name; allBtn.dataset.regionKey = 'all'; allBtn.style.setProperty('--color', regions['all'].color);
        allBtn.addEventListener('click', () => { const otherButtons = regionSelectorContainer.querySelectorAll('.region-button:not([data-region-key="all"])'); const areAllSelected = Array.from(otherButtons).every(btn => btn.classList.contains('selected')); otherButtons.forEach(btn => areAllSelected ? btn.classList.remove('selected') : btn.classList.add('selected')); });
        regionSelectorContainer.appendChild(allBtn);
        const regionEntries = Object.entries(regions).filter(([key]) => key !== 'all');
        for (const [key, region] of regionEntries) { const button = document.createElement('button'); button.className = 'region-button'; button.textContent = region.name; button.dataset.regionKey = key; button.style.setProperty('--color', region.color); button.addEventListener('click', () => button.classList.toggle('selected')); regionSelectorContainer.appendChild(button); }
    }
    function generateTimeline() {
        currentRegionKeys = Array.from(regionSelectorContainer.querySelectorAll('.region-button.selected:not([data-region-key="all"])')).map(btn => btn.dataset.regionKey);
        if (currentRegionKeys.length === 0) { alert('地域を1つ以上選択してください。'); return; }
        showTimeline();
    }
    function showTimeline() {
        homeScreen.classList.add('hidden'); timelineScreen.classList.remove('hidden');
        const totalRegions = Object.keys(regions).length - 1;
        if (currentRegionKeys.length === totalRegions) { timelineTitle.textContent = "全世界の年表"; } else { const selectedRegionNames = currentRegionKeys.map(key => regions[key].name).join('・'); timelineTitle.textContent = `${selectedRegionNames}`; }
        buildTimeline(true);
        timelineViewport.scrollLeft = 0; timelineViewport.scrollTop = 0;
    }
    function goHome() {
        timelineScreen.classList.add('hidden'); homeScreen.classList.remove('hidden'); currentZoom = 1.0; zoomLevelSpan.textContent = `${currentZoom.toFixed(1)}x`;
    }

    function calculateMaxLanes(items) {
        if (!items || items.length === 0) return 0;
        const points = [];
        items.forEach(item => { points.push({ time: item.s, type: 'start' }); points.push({ time: item.e, type: 'end' }); });
        points.sort((a, b) => a.time - b.time || (a.type === 'end' ? -1 : 1));
        let maxLanes = 0, currentLanes = 0;
        points.forEach(point => {
            if (point.type === 'start') { currentLanes++; maxLanes = Math.max(maxLanes, currentLanes); } else { currentLanes--; }
        });
        return maxLanes;
    }
    
    function processSubItemGroup(groupItems, topPos, bandHeight, color, nation, mode) {
        const maxLanes = calculateMaxLanes(groupItems);
        if (maxLanes <= 0) return;
        const SUB_BAND_MARGIN = 2;
        let subBandHeight, topPadding;
        if (maxLanes === 1) {
            subBandHeight = bandHeight / 2; topPadding = (bandHeight - subBandHeight) / 2;
        } else {
            subBandHeight = (bandHeight - (maxLanes - 1) * SUB_BAND_MARGIN) / maxLanes; topPadding = 0;
        }
        const lanes = [];
        groupItems.forEach(item => {
            let assignedLane = lanes.findIndex(laneEnd => item.s >= laneEnd);
            if (assignedLane === -1) { assignedLane = lanes.length; }
            if (assignedLane >= maxLanes) return;
            const subTop = topPos + topPadding + (assignedLane * (subBandHeight + SUB_BAND_MARGIN));
            createSubBand(item, subTop, subBandHeight, color, nation, mode);
            lanes[assignedLane] = item.e;
        });
    }

    function buildTimeline(isInitialBuild = false) {
        nationsWrapper.innerHTML = ''; gridLinesContainer.innerHTML = '';
        if (isInitialBuild) {
            nationNumbersContainer.innerHTML = '';
            currentFilteredNations = nations.filter(nation => nation.r && nation.r.some(reg => currentRegionKeys.includes(reg))).sort((a, b) => a.s - b.s);
        }
        const PADDING_Y = 10; const ROW_HEIGHT = 40;
        if (currentFilteredNations.length === 0) {
            nationNumbersContainer.innerHTML = '<div style="padding: 20px;">データがありません</div>';
            minYear = -50; maxYear = 50; updateTimelineZoom(); return;
        }
        minYear = Math.min(...currentFilteredNations.map(n => n.s)) - 50; maxYear = Math.max(...currentFilteredNations.map(n => n.e)) + 50;

        let totalLanes = 0;
        if (isCompactMode) {
            const lanes = [];
            currentFilteredNations.forEach(nation => {
                let assignedLane = lanes.findIndex(laneEnd => nation.s >= laneEnd);
                if (assignedLane === -1) { assignedLane = lanes.length; }
                lanes[assignedLane] = nation.e;
                const topPos = PADDING_Y + assignedLane * ROW_HEIGHT;
                renderNation(nation, topPos);
            });
            totalLanes = lanes.length;
        } else {
            if (isInitialBuild) nationNumbersContainer.innerHTML = '';
            currentFilteredNations.forEach((nation, index) => {
                const topPos = PADDING_Y + index * ROW_HEIGHT;
                renderNation(nation, topPos);
                if (isInitialBuild) {
                    const numberDiv = document.createElement('div'); numberDiv.className = 'nation-number'; numberDiv.textContent = index + 1; nationNumbersContainer.appendChild(numberDiv);
                }
            });
            totalLanes = currentFilteredNations.length;
            nationNumbersContainer.style.padding = `${PADDING_Y}px 10px`;
        }
        
        const contentHeight = (totalLanes > 0) ? (PADDING_Y * 2) + (totalLanes * ROW_HEIGHT) - 10 : PADDING_Y * 2;
        nationsWrapper.style.height = `${contentHeight}px`;
        gridLinesContainer.style.height = `${contentHeight}px`;
        updateTimelineZoom();
    }

    function renderNation(nation, topPos) {
        const nationColor = nation.c || regions[nation.r[0]].color;
        const BAND_HEIGHT = 30;
        if (isRulerMode && nation.rul && nation.rul.length > 0) {
            const sortedRulers = nation.rul.sort((a, b) => a.s - b.s);
            let lastYear = nation.s;
            sortedRulers.forEach(ruler => {
                if (ruler.s > lastYear) createRulerBand(nation, lastYear, ruler.s, topPos, nationColor, false);
                createRulerBand(ruler, ruler.s, ruler.e, topPos, nationColor, true, nation);
                lastYear = ruler.e;
            });
            if (nation.e > lastYear) createRulerBand(nation, lastYear, nation.e, topPos, nationColor, false);
        } else {
            const nationBand = createNationBand(nation, topPos, nationColor);
            if (currentSubMode !== 'none' && nation[currentSubMode]) {
                nationBand.classList.add('sub-mode');
                const subItems = nation[currentSubMode].sort((a, b) => a.s - b.s);
                let currentGroup = [], groupEndYear = -Infinity;
                for (const item of subItems) {
                    if (item.s >= groupEndYear) {
                        if (currentGroup.length > 0) { processSubItemGroup(currentGroup, topPos, BAND_HEIGHT, nationColor, nation, currentSubMode); }
                        currentGroup = [item]; groupEndYear = item.e;
                    } else {
                        currentGroup.push(item); groupEndYear = Math.max(groupEndYear, item.e);
                    }
                }
                if (currentGroup.length > 0) { processSubItemGroup(currentGroup, topPos, BAND_HEIGHT, nationColor, nation, currentSubMode); }
            }
        }
        createNameLabel(nation, topPos);
    }
    
    function createNationBand(data, top, color) { const band = document.createElement('div'); band.className = 'nation-band'; band.style.top = `${top}px`; band.style.backgroundColor = color; band.dataset.start = data.s; band.dataset.end = data.e; band.addEventListener('click', () => openModal(data, 'nation')); nationsWrapper.appendChild(band); return band; }
    function createRulerBand(data, start, end, top, color, isFamous, nationContext) { const band = document.createElement('div'); band.className = 'nation-band'; band.style.backgroundColor = color; band.dataset.start = start; band.dataset.end = end; if (end - start <= 1) { band.classList.add('point-event'); band.style.top = `${top + (30 - 10) / 2}px`; } else { band.style.top = `${top}px`; } if (isFamous) { band.classList.add('famous'); band.addEventListener('click', () => openModal({ data, nation: nationContext }, 'ruler')); } else { band.addEventListener('click', () => openModal(nationContext, 'nation')); } nationsWrapper.appendChild(band); }
    function createSubBand(data, top, height, color, nationContext, type) {
        const subBand = document.createElement('div'); subBand.className = 'sub-band';
        subBand.style.setProperty('--sub-band-color', color);
        subBand.dataset.start = data.s; subBand.dataset.end = data.e;
        if (data.e - data.s <= 1) {
            subBand.classList.add('point-event'); const pointSize = 8;
            subBand.style.top = `${top + (height - pointSize) / 2}px`;
        } else {
            subBand.style.top = `${top}px`; subBand.style.height = `${height}px`;
        }
        subBand.addEventListener('click', () => openModal({ data, nation: nationContext }, type));
        nationsWrapper.appendChild(subBand);
    }
    function createNameLabel(nation, top) {
        const label = document.createElement('div'); label.className = 'nation-name-label'; label.textContent = nation.n; label.style.top = `${top}px`;
        label.dataset.start = nation.s; label.dataset.end = nation.e;
        document.body.appendChild(label); label.dataset.textWidth = label.scrollWidth; document.body.removeChild(label);
        const labelWidth = (parseFloat(label.dataset.end) - parseFloat(label.dataset.start)) * currentZoom;
        const textWidth = parseFloat(label.dataset.textWidth) || 0;
        if (isNameVisible && (!isCompactMode || labelWidth > textWidth)) {
            label.classList.add('show-name');
        }
        nationsWrapper.appendChild(label);
    }
    
    function updateTimelineZoom() {
        const totalDuration = maxYear - minYear;
        const containerWidth = totalDuration * currentZoom;
        nationsWrapper.parentElement.style.width = `${containerWidth}px`;
        timeAxis.style.width = `${containerWidth}px`;
        nationsWrapper.querySelectorAll('.nation-band, .sub-band, .nation-name-label').forEach(el => {
            const start = (parseFloat(el.dataset.start) - minYear) * currentZoom;
            el.style.transform = `translateX(${start}px)`;
            if (!el.classList.contains('point-event') && !el.classList.contains('nation-name-label')) {
                const width = (parseFloat(el.dataset.end) - parseFloat(el.dataset.start)) * currentZoom;
                el.style.width = `${width - 1}px`;
            } else if (el.classList.contains('nation-name-label')) {
                const width = (parseFloat(el.dataset.end) - parseFloat(el.dataset.start)) * currentZoom;
                el.style.width = `${width}px`;
                if (isCompactMode) {
                    const textWidth = parseFloat(el.dataset.textWidth) || 0;
                    el.classList.toggle('show-name', isNameVisible && width > textWidth);
                }
            }
        });
        drawTimeAxis();
    }
    function drawTimeAxis() {
        timeAxis.innerHTML = ''; gridLinesContainer.innerHTML = ''; let step; if (currentZoom > 10) step = 5; else if (currentZoom > 5) step = 10; else if (currentZoom > 2) step = 25; else if (currentZoom > 0.8) step = 50; else if (currentZoom > 0.4) step = 100; else if (currentZoom > 0.2) step = 200; else if (currentZoom > 0.1) step = 500; else step = 1000; const startYear = Math.floor(minYear / step) * step; for (let year = startYear; year <= maxYear; year += step) { if (year < minYear || year > maxYear) continue; const position = (year - minYear) * currentZoom; const label = document.createElement('div'); label.className = 'time-label'; label.textContent = year; label.style.transform = `translateX(${position}px) translateX(-50%)`; timeAxis.appendChild(label); const tick = document.createElement('div'); tick.className = 'time-tick'; tick.style.transform = `translateX(${position}px)`; timeAxis.appendChild(tick); const gridLine = document.createElement('div'); gridLine.className = 'grid-line'; if (year % 100 === 0) { gridLine.classList.add('major'); if (year === 0) gridLine.style.backgroundColor = 'var(--accent-color)'; } gridLine.style.transform = `translateX(${position}px)`; gridLinesContainer.appendChild(gridLine); }
    }
    
    function openModal(payload, type) {
        let data, nation, color;
        modalDetailsContainer.innerHTML = '';
        if (type === 'nation') { data = nation = payload; } else { data = payload.data; nation = payload.nation; }
        color = nation.c || regions[nation.r[0]].color;
        modal.style.setProperty('--modal-accent-color', color);
        modalName.textContent = data.n;

        if (!data.hp) {
            let periodLabel = dataLabels.period || "期間";
            if (type === 'ruler') { periodLabel = dataLabels.reign || "統治期間"; }
            else if (type === 'peo') { periodLabel = dataLabels.lifespan || "生没年"; }
            const periodValue = data.p || `${formatYear(data.s)} ~ ${formatYear(data.e)}`;
            createDetailItem(periodLabel, periodValue);
        }

        const ignoreKeys = new Set(['n', 'r', 's', 'e', 'c', 'peo', 'ev', 'sys', 'rul', 'tho', 'p', 'hp', 'fam']);
        for (const key in data) { if (!ignoreKeys.has(key)) createDetailItem(dataLabels[key] || key, data[key]); }
        const detailValues = modalDetailsContainer.querySelectorAll('.detail-value');
        detailValues.forEach(val => val.classList.add('hidden-value'));
        showNextDetailBtn.disabled = false;
        modal.classList.remove('hidden');
    }

    function createDetailItem(label, value) { const item = document.createElement('div'); item.className = 'detail-item'; const displayValue = Array.isArray(value) ? value.join('\n') : value; item.innerHTML = `<strong>${label}:</strong> <span class="detail-value">${displayValue}</span>`; modalDetailsContainer.appendChild(item); return item; }
    function showNextDetail() { const nextHidden = modalDetailsContainer.querySelector('.detail-value.hidden-value'); if (nextHidden) { nextHidden.classList.remove('hidden-value'); } if (!modalDetailsContainer.querySelector('.detail-value.hidden-value')) { showNextDetailBtn.disabled = true; } }
    function formatYear(year) { return year < 0 ? `紀元前${-year}年` : `${year}年`; }
    
    function setupEventListeners() {
        generateTimelineBtn.addEventListener('click', generateTimeline);
        document.getElementById('back-to-home').addEventListener('click', goHome);
        const handleZoom = (newZoomFactor) => { const oldZoom = currentZoom; const scrollLeft = timelineViewport.scrollLeft; const viewportWidth = timelineViewport.clientWidth; const centerPointOnTimeline = (scrollLeft + viewportWidth / 2) / oldZoom; currentZoom = newZoomFactor; zoomLevelSpan.textContent = `${currentZoom.toFixed(1)}x`; updateTimelineZoom(); const newPixelPositionOfCenter = centerPointOnTimeline * currentZoom; timelineViewport.scrollLeft = newPixelPositionOfCenter - (viewportWidth / 2); };
        document.getElementById('zoom-in').addEventListener('click', () => { handleZoom(Math.min(20.0, currentZoom * 1.25)); });
        document.getElementById('zoom-out').addEventListener('click', () => { handleZoom(Math.max(0.1, currentZoom / 1.25)); });
        const toggleNamesBtn = document.getElementById('toggle-names');
        toggleNamesBtn.addEventListener('click', (e) => {
            isNameVisible = !isNameVisible;
            e.target.classList.toggle('active', isNameVisible);
            e.target.textContent = isNameVisible ? '国名' : '国名';
            if (!isCompactMode) { nationsWrapper.querySelectorAll('.nation-name-label').forEach(label => { label.classList.toggle('show-name', isNameVisible); }); } else { updateTimelineZoom(); }
        });
        
        toggleRulersBtn.addEventListener('click', (e) => {
            isRulerMode = !isRulerMode;
            if (isRulerMode) { currentSubMode = 'none'; subModeButton.textContent = subModeLabels.none; subModeButton.classList.remove('active'); }
            e.target.classList.toggle('active', isRulerMode);
            const scrollLeft = timelineViewport.scrollLeft; const scrollTop = timelineViewport.scrollTop;
            buildTimeline(false);
            requestAnimationFrame(() => { timelineViewport.scrollLeft = scrollLeft; timelineViewport.scrollTop = scrollTop; });
        });
        
        subModeButton.addEventListener('click', (e) => {
            const currentIndex = subModes.indexOf(currentSubMode);
            const nextIndex = (currentIndex + 1) % subModes.length;
            currentSubMode = subModes[nextIndex];
            e.target.textContent = subModeLabels[currentSubMode];
            e.target.classList.toggle('active', currentSubMode !== 'none');
            if (currentSubMode !== 'none') { isRulerMode = false; toggleRulersBtn.classList.remove('active'); }
            const scrollLeft = timelineViewport.scrollLeft; const scrollTop = timelineViewport.scrollTop;
            buildTimeline(false);
            requestAnimationFrame(() => { timelineViewport.scrollLeft = scrollLeft; timelineViewport.scrollTop = scrollTop; });
        });
        
        toggleCompactBtn.addEventListener('click', (e) => {
            isCompactMode = !isCompactMode;
            timelineScreen.classList.toggle('compact-active', isCompactMode);
            e.target.classList.toggle('active', isCompactMode);
            const scrollLeft = timelineViewport.scrollLeft; const scrollTop = timelineViewport.scrollTop;
            buildTimeline(true);
            requestAnimationFrame(() => { timelineViewport.scrollLeft = scrollLeft; timelineViewport.scrollTop = scrollTop; });
        });

        document.getElementById('close-modal').addEventListener('click', () => modal.classList.add('hidden'));
        modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.add('hidden'); });
        showNextDetailBtn.addEventListener('click', showNextDetail);
        let isSyncing = false;
        timelineViewport.addEventListener('scroll', () => { if (isSyncing) return; isSyncing = true; timeAxisContainer.scrollLeft = timelineViewport.scrollLeft; nationNumbersContainer.scrollTop = timelineViewport.scrollTop; requestAnimationFrame(() => { isSyncing = false; }); });
        nationNumbersContainer.addEventListener('scroll', () => { if (isSyncing) return; isSyncing = true; timelineViewport.scrollTop = nationNumbersContainer.scrollTop; requestAnimationFrame(() => { isSyncing = false; }); });
    }
    
    init();
});