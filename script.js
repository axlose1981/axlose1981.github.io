document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const setCountSelect = document.getElementById('set-count');
    const resultsContainer = document.getElementById('results');

    // 번호에 따른 색상 클래스 반환
    function getBallColorClass(number) {
        if (number <= 10) return 'yellow';
        if (number <= 20) return 'blue';
        if (number <= 30) return 'red';
        if (number <= 40) return 'gray';
        return 'green';
    }

    // 1~45 사이의 중복되지 않는 번호 6개 생성 및 정렬
    function generateNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }

    // 한 세트(로우)의 DOM 요소 생성
    function createRow(index, numbers) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'lotto-row';

        const label = document.createElement('div');
        label.className = 'row-label';
        label.textContent = `${String.fromCharCode(65 + index)}세트`;

        const ballsDiv = document.createElement('div');
        ballsDiv.className = 'balls';

        numbers.forEach(num => {
            const ball = document.createElement('div');
            ball.className = `ball ${getBallColorClass(num)}`;
            ball.textContent = num;
            ballsDiv.appendChild(ball);
        });

        rowDiv.appendChild(label);
        rowDiv.appendChild(ballsDiv);
        return rowDiv;
    }

    // 버튼 클릭 이벤트 핸들러
    generateBtn.addEventListener('click', () => {
        resultsContainer.innerHTML = '';
        const setCount = parseInt(setCountSelect.value, 10);
        
        for (let i = 0; i < setCount; i++) {
            const numbers = generateNumbers();
            const rowElement = createRow(i, numbers);
            resultsContainer.appendChild(rowElement);
        }
    });

    // 초기 상태로 버튼 클릭 효과 (기본값인 5세트를 생성해둠)
    generateBtn.click();
});
