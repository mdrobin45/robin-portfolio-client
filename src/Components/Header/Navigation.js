import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom';


const navigation = [
    { name: 'Home', to: '/'},
    { name: 'Projects', to: '/projects' },
    { name: 'Blog', to: '/blog' }
]
  
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
const Navigation = () => {
    return (
        <Disclosure as="nav" className="bg-white">
            {({ open }) => (
                <>
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button*/}
                            <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            {open ? (
                                <XIcon className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                            )}
                            </Disclosure.Button>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex items-center">
                                <h2 className='text-5xl font-bold'>Robin.</h2>
                            </div>
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex mt-1.5 space-x-4">
                                    {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.to}
                                        className={classNames(
                                        item.current ? 'bg-primary text-white' : 'text-gray-700 hover:bg-primary hover:text-white',
                                        'px-3 py-2 rounded-md font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Link>
                                    ))}
                                    <a className='px-3 py-2 font-medium text-gray-700' href="/#aboutMe">About Me</a>
                                    <a className='bg-primary px-3 py-2 rounded-md font-medium text-white' href="/#HomeContact">GET IN TOUCH</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Disclosure.Panel className="sm:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.to}
                            className={classNames(
                            item.current ? 'bg-primary text-white' : 'text-gray-700 hover:bg-primary hover:text-white',
                            'px-3 py-2 rounded-md font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            {item.name}
                        </Link>
                    ))}
                    </div>
                </Disclosure.Panel>
                </>
            )}
            </Disclosure>
    );
};

export default Navigation;