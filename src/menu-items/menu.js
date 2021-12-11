// assets
import { IconMeat, IconTrophy } from '@tabler/icons';

// constant
const icons = {
    IconMeat,
    IconTrophy
};

// ===========================|| DASHBOARD MENU ITEMS ||=========================== //

const menu = {
    id: 'menu',
    title: 'Menu',
    type: 'group',
    children: [
        {
            id: 'food',
            title: 'Food',
            type: 'item',
            url: '/menu/food',
            icon: icons.IconMeat,
            breadcrumbs: false
        },
        {
            id: 'point',
            title: 'Point',
            type: 'item',
            url: '/point',
            icon: icons.IconTrophy,
            breadcrumbs: false
        }
    ]
};

export default menu;
