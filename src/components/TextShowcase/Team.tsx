import profileFoundation from '../../assets/team/foundation.png';
import profileHandsome from '../../assets/team/handsome.png';
import profileMango from '../../assets/team/mango.png';
import profileVinny from '../../assets/team/vinny.gif';
import TextSection from './TextSection';

interface DiscordUser {
    name: string;
    avatar: string;
    position: string;
}

const owner: DiscordUser = {
    name: 'FoundationX',
    avatar: profileFoundation,
    position: 'Owner',
};

const management: DiscordUser[] = [
    {
        name: 'vinny',
        avatar: profileVinny,
        position: 'Event Manager',
    },
    {
        name: 'mango',
        avatar: profileMango,
        position: 'Staff Manager',
    },
    {
        name: 'handsome gamer',
        avatar: profileHandsome,
        position: 'Community Manager',
    },
];

const User = ({ user }: { user: DiscordUser }) => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                flexFlow: 'column nowrap',
                justifyContent: 'center',
            }}
        >
            <img
                src={user.avatar}
                style={{ width: '128px', height: '128px', borderRadius: '50%', backgroundColor: '#272727ff' }}
            />
            <h3 style={{ marginBottom: 0 }}>{user.name}</h3>
            <p style={{ marginTop: 0, color: 'gray' }}>{user.position}</p>
        </div>
    );
};

const Team = () => {
    return (
        <TextSection>
            <h1>The Team</h1>
            <div
                style={{
                    display: 'flex',
                    gap: '4rem',
                    justifyContent: 'center',
                    flexFlow: 'row wrap',
                    alignItems: 'center',
                }}
            >
                <User user={owner} />
                {management.map((e, i) => (
                    <User key={i} user={e} />
                ))}
            </div>
        </TextSection>
    );
};

export default Team;
