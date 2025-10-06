import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type ActiveSectionContext = {
    activeSection: string
}

const ActiveSectionContext = createContext<ActiveSectionContext | undefined>(undefined);

type ActiveSectionProviderProps = {
    children: ReactNode
}

export const ActiveSectionProvider = ({ children }: ActiveSectionProviderProps) => {
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-50% 0px -50% 0px',
            }
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);
    
    return (
        <ActiveSectionContext value={{ activeSection }}>
            {children}
        </ActiveSectionContext>
    );
};


export const useActiveSection = () => {
    const context = useContext(ActiveSectionContext);
    if(context === undefined) {
        throw new Error('useActiveSection turi būti naudojamas ActiveSectionProvider viduje');
    }
    return context;
};

