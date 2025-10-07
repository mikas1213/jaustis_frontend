import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type ActiveSectionContext = {
    activeSection: string,
    heroPassed: boolean
}

const ActiveSectionContext = createContext<ActiveSectionContext | undefined>(undefined);

type ObserverProviderProps = {
    children: ReactNode
}

export const ObserverProvider = ({ children }: ObserverProviderProps) => {
    const [activeSection, setActiveSection] = useState<string>('');
    const [heroPassed, setHeroPassed] = useState<boolean>(false);

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
                root: null,
                threshold: 0,
                rootMargin: "-30% 0px -70% 0px"
            }
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            const isAboveNavbar = !entry.isIntersecting;
            if (isAboveNavbar) {
                // Hero sekcija praėjo navbar
                setHeroPassed(true);
            } else {
                setHeroPassed(false);
            }
        },
        {
            root: null,
            threshold: 0,
            rootMargin: `-50px 0px 0px 0px` // tikrins kai viršus pasieks 50px
        }
    );

    const hero = document.querySelector('#hero');
    if (hero) observer.observe(hero);

    return () => observer.disconnect();
}, []);
    
    return (
        <ActiveSectionContext value={{ activeSection, heroPassed }}>
            {children}
        </ActiveSectionContext>
    );
};


export const useObserver = () => {
    const context = useContext(ActiveSectionContext);
    if(context === undefined) {
        throw new Error('useObserver turi būti naudojamas ObserverProvider viduje');
    }
    return context;
};

