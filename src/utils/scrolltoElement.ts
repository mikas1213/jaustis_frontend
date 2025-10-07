export const scrollToElement = (sectionId: string, y_offset: number) => {
    const element = document.getElementById(sectionId);
    if (element) {
        const yOffset = y_offset;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
            top: y,
            behavior: 'smooth',
        });
    }
};