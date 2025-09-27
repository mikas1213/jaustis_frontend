type User = {
    name: string,
    surName: string
};
type Initials = 'name' | 'surname' | 'NameSurname' | 'NameS' | 'NS';

const upperFirst = function(str: string): string {
    const firstLetter = str.charAt(0);
    const remainWord = str.slice(1);
    return firstLetter.toUpperCase()+remainWord;
}

function formatUserInitials(user: User, initials: Initials) {

    const name: string = upperFirst(user.name || '');
    const surName: string = upperFirst(user.surName || '');

    switch(initials) {
        case 'name': return name;
        case 'surname': return surName;
        case 'NameSurname': return `${name} ${surName}`;
        case 'NameS': return `${name} ${surName.charAt(0)}.`;
        case 'NS': return `${name.charAt(0)}${surName.charAt(0)}`;
        default: return  `${name} ${surName}`;
    };
}

export default formatUserInitials;