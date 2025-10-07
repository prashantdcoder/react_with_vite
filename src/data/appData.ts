import { ICheckBoxNode } from "../utils/types";

const shoppingList: ICheckBoxNode[] = [
    {
        id: 1,
        label: 'electronics',
        checked: false,
        children: [
            {
                id: 101,
                label: 'mobile',
                checked: false,
                children: [
                    {
                        id: 1001,
                        label: 'samsung',
                        checked: false,
                        children: []
                    },
                    {
                        id: 1002,
                        label: 'iphone',
                        checked: false,
                        children: []
                    }
                ]
            },
            {
                id: 102,
                label: 'power bank',
                checked: false,
                children: []
            },
            {
                id: 103,
                label: 'ear phones',
                checked: false,
                children: []
            }
        ]
    },
    {
        id: 2,
        label: 'grocery',
        checked: false,
        children: [
            {
                id: 201,
                label: 'fruits',
                checked: false,
                children: [
                    {
                        id: 2001,
                        label: 'apple',
                        checked: false,
                        children: [
                            {
                                id: 20001,
                                label: 'fuji apple',
                                checked: false,
                                children: []
                            }, {
                                id: 20002,
                                label: 'red delicious apple',
                                checked: false,
                                children: []
                            }
                        ]
                    },
                    {
                        id: 2002,
                        label: 'banana',
                        checked: false,
                        children: []
                    }
                ]
            }
        ]
    }
];

const permissions: ICheckBoxNode[] = [
    {
        id: 1,
        label: "User Management",
        checked: false,
        children: [
            {
                id: 2,
                label: "Create User",
                checked: false,
                children: []
            },
            {
                id: 3,
                label: "Edit User",
                checked: false,
                children: []
            },
            {
                id: 4,
                label: "Delete User",
                checked: false,
                children: []
            }
        ]
    },
    {
        id: 5,
        label: "Reports",
        checked: false,
        children: [
            {
                id: 6,
                label: "View Sales Report",
                checked: false,
                children: []
            },
            {
                id: 7,
                label: "Download Reports",
                checked: false,
                children: []
            }
        ]
    },
    {
        id: 8,
        label: "Settings",
        checked: false,
        children: [
            {
                id: 9,
                label: "Profile Settings",
                checked: false,
                children: []
            },
            {
                id: 10,
                label: "System Settings",
                checked: false,
                children: [
                    {
                        id: 11,
                        label: "Update Password Policy",
                        checked: false,
                        children: []
                    },
                    {
                        id: 12,
                        label: "Manage Integrations",
                        checked: false,
                        children: []
                    }
                ]
            }
        ]
    }
];

export { permissions, shoppingList };
