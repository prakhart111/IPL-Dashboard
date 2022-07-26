import { useLocation } from 'react-router-dom';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import Image from '@material-tailwind/react/Image';
import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownItem from '@material-tailwind/react/DropdownItem';
import ProfilePicture from '../assets/img/man.png';

export default function AdminNavbar({ showSidebar, setShowSidebar }) {
    const location = useLocation().pathname;

    return (
        <nav className="AdminNavbar md:ml-64 py-6 px-3">
            <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
                <div className="md:hidden">
                    <Button
                        color="transparent"
                        buttonType="link"
                        size="lg"
                        iconOnly
                        rounded
                        ripple="light"
                        onClick={() => setShowSidebar('left-0')}
                    >
                        <Icon name="menu" size="2xl" color="white" />
                    </Button>
                    <div
                        className={`absolute top-2 md:hidden ${
                            showSidebar === 'left-0' ? 'left-64' : '-left-64'
                        } z-50 transition-all duration-300`}
                    >
                        <Button
                            color="transparent"
                            buttonType="link"
                            size="lg"
                            iconOnly
                            rounded
                            ripple="light"
                            onClick={() => setShowSidebar('-left-64')}
                        >
                            <Icon name="close" size="2xl" color="white" />
                        </Button>
                    </div>
                </div>

                <div className="flex justify-between items-center w-full">
                    <h4 className="uppercase text-white text-md tracking-wider mt-1">
                        {location === '/'
                            ? 'DASHBOARD'
                            : location.toUpperCase().replace('/', '')}
                    </h4>

                    <div className="flex">
                        <div className="-mr-4 ml-6">
                            <Dropdown
                                color="transparent"
                                buttonText={
                                    <div className="w-12">
                                        <Image src={ProfilePicture} rounded />
                                    </div>
                                }
                                rounded
                                style={{
                                    padding: 0,
                                    color: 'transparent',
                                }}
                            > 
                                <DropdownItem color="lightBlue">
                                    <a href='https://www.kaggle.com/saurav9786/indian-premier-league-match-analysis' >Link to Kaggle Dataset</a>
                                </DropdownItem>
                                <DropdownItem color="lightBlue">
                                    <a className="text-indigo-800 font-bold" href='https://linktr.ee/prakhartandon'>Prakhar Tandon</a>
                                </DropdownItem>
                                
                            </Dropdown>
                        </div>
                    </div>
                    
                </div>
            </div>
                <p className='text-sm sm:text-md md:pr-8 md:pl-10 text-white font-bold pt-4 mb-0'>Graphically displays and analyses the trends and data regarding all IPL matches from 2007 to 2017.</p>
        </nav>
    );
}
