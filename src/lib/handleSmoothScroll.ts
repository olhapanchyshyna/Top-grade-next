const handleSmoothScroll = (
	e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => {
	e.preventDefault() // Предотвратить стандартное поведение ссылки
	// Получаем href атрибут из элемента ссылки
	const href = e.currentTarget.getAttribute('href')
	if (href) {
		// Убираем '/' из href, чтобы получить id целевого элемента
		const id = href.replace('/', '')
		// Находим элемент по id
		const targetElement = document.querySelector<HTMLElement>(id)
		if (targetElement) {
			// Плавно скроллим к элементу
			window.scrollTo({
				top: targetElement.offsetTop,
				behavior: 'smooth',
			})
		}
	}
}

export { handleSmoothScroll }
