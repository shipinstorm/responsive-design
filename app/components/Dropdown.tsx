import { Menu, Transition } from '@headlessui/react';
import React, { Fragment, useCallback, useMemo } from 'react';

interface IDropdown<TEnum> {
    items: Array<TEnum>;
    active: TEnum;
    onClick: (active: TEnum) => void;
}

export const Dropdown = <TEnum extends string>({ items, active, onClick }: IDropdown<TEnum>) => {
    const capitalizeFirstLetter = useCallback((str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(), []);

    const rendererActive = useMemo(() => active.toLowerCase(), [active]);
    const rendererItems = useMemo(
        () =>
            items.map((item) => (
                <div className="px-1 py-1">
                    <Menu.Item>
                        {({ active }) => (
                            <button
                                className={`${
                                    active ? 'bg-orange-500 text-white' : 'text-gray-900'
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                onClick={() => onClick(item)}
                            >
                                {capitalizeFirstLetter(item)}
                            </button>
                        )}
                    </Menu.Item>
                </div>
            )),
        [capitalizeFirstLetter, items, onClick]
    );

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    Sorted by {rendererActive}
                    <svg
                        className="ml-2 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {rendererItems}
                </Menu.Items>
            </Transition>
        </Menu>
    );
};
