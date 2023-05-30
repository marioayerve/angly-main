import { Injectable } from '@angular/core';

/*
 * Menu interface
 */
export interface Menu {
	state: string;
	name?: string;
	type?: string;
	icon?: string;
	children?: ChildrenItems[];
}

/*
 * Children menu interface
 */
export interface ChildrenItems {
	state: string;
	name: string;
	type?: string;
}

const HEADERMENUITEMS = [
	{
		state: "home",
		name: "Inicio",
		type:"link"
	},
	{
		state:"",
		name:"Varios",
		type:"sub",
		icon: 'fa fa-caret-down',
		children: [
			{ state: 'about', name: 'Nosotros', type:"link"},
			{ state: 'features', name: 'Emergencias', type:"link"},
			{ state: 'contact', name: 'Contactanos', type:"link"},
			{ state: 'support', name: 'Documentación', type:"link"},
			//{ state: 'pricing', name: 'Pricing', type:"link"},
			//{ state: 'search', name: 'Busquedas', type:"link"}//,
			/*{ state: 'portfolio-v1', name: 'Portfolio V1', type:"link"},
			{ state: 'portfolio-v2', name: 'Portfolio V2', type:"link"},
			{ state: 'portfolio-v3', name: 'Portfolio V3', type:"link"},
			{ state: 'testimonial-v1', name: 'Testimonial V1', type:"link"},
			{ state: 'testimonial-v2', name: 'Testimonial V2', type:"link"}*/
		]
	},
	{
		state:"",
		name:"Colaboración",
		type:"sub",
		icon: 'fa fa-caret-down',
		children: [
			//{ state: 'sidebar-widgets', name:'Widgets', type:"link"},
			//{ state: 'login', name:'Login', type:"link"},
			//{ state: 'sign-up', name: 'Sign Up', type:"link"},
			{ state: 'thank-you', name: 'Agradecimientos', type:"link"}//,
			//{ state: 'maintenance', name: 'Maintenance', type:"link"},
			//{ state: 'not-found', name: '404', type:"link"}
		]
	},
	/*{
		state:"",
		name:"Shop",
		type:"sub",
		icon: 'fa fa-caret-down',
		children: [
			{ state: 'product-list', name:'Product List', type:"link"},
			{ state: 'product-cart', name: 'Product Cart', type:"link"},
			{ state: 'product-checkout', name: 'Product Checkout', type:"link"},
			{ state: 'product-detail', name: 'Product Detail', type:"link"}
		]
	},*/
	{
		state:"",
		name:"Archivos / Información",
		type:"sub",
		icon: 'fa fa-caret-down',
		children: [
			{ state: 'blog-listing-sidebar', name:'Instituciones / Respaldo ', type:"link"},
			{ state: 'blog-column2', name: 'Vehículos', type:"link"},
			/*{ state: 'blog-column3', name: 'Blog Column3', type:"link"},
			{ state: 'blog-masonry2', name: 'Blog Masonry2', type:"link"},
			{ state: 'blog-masonry3', name: 'Blog Masonry3', type:"link"},
			{ state: 'blog-sidebar', name: 'Blog Sidebar', type:"link"},
			{ state: 'blog-no-sidebar', name: 'Blog No Sidebar', type:"link"},*/
			{ state: 'blog-detail', name: 'Información Frecuente', type:"link"}
		]
	}
	];

const FOOTERMENU = [
	{
		state: "home",
		name: "Home",
		type:"link"
	},
	{
		state:"features",
		name:"Emergencias",
		type:"link"
	},
	{
		state:"pricing",
		name:"Pricing",
		type:"link"
	},
	{
		state:"contact",
		name:"Contact",
		type:"link"
	},
	{
		state:"team",
		name:"Team",
		type:"link"
	},
	{
		state:"about",
		name:"About",
		type:"link"
	}
]

const EXPLOREMENU = [
	{
		state: "home",
		name: "Dashboard",
		type:"link"
	},
	/*{
		state: "sign-in",
		name: "Sign In",
		type:"link"
	},
	{
		state: "sign-up",
		name: "Sign Up",
		type:"link"
	},*/
	{
		state: "helpdesk",
		name: "Helpdesk",
		type:"link"
	},
	{
		state: "privacy-policy",
		name: "Privacy Policy",
		type:"link"
	},
	{
		state: "terms-conditions",
		name: "Terms & Conditions ",
		type:"link"
	}
];

const FOOTERMENU2 = [
	{
		state: "home",
		name: "Inicio",
		type:"link"
	},
	/*{
		state:"sidebar-widgets",
		name:"Widgets",
		type:"link"
	},*/
	{
		state:"about",
		name:"Nosotros",
		type:"link"
	},
	{
		state:"contact",
		name:"Contactanos",
		type:"link"
	},
	{
		state:"features",
		name:"Emergencias",
		type:"link"
	},
	{
		state:"support",
		name:"Documentación",
		type:"link"
	},
	{
		state:"search",
		name:"Actividades",
		type:"link"
	}
];

@Injectable()
export class MenuItems {

	/*
	 * Get all header menu
	 */
	getMainMenu(): Menu[] {
		return HEADERMENUITEMS;
	}

	/*
	 * Get footer menu
	 */
	getFooterMenu(): Menu[] {
		return FOOTERMENU;
	}

	/*
	 * Get the explore menu
	 */
	getExploreMenu(): Menu[] {
		return EXPLOREMENU;
	}

	/*
	 * Get the footer2
	 */
	getFooter2(): Menu[] {
		return FOOTERMENU2;
	}

}
