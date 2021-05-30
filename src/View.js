const View = {
    render({ minutes, seconds }) {
        document.body.innerHTML = `
            <p>Proximo Post em</p>
            <span>${minutes}:${seconds}</span>
        `;
    }
}

export { View };