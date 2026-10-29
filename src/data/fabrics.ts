import viscose from '@/assets/fabric-viscose.jpg';
import print from '@/assets/fabric-print.jpg';
import embroidery from '@/assets/embroidery-suit.jpg';
import hero from '@/assets/textile-hero.jpg';
export const bases = ['Polyester','Viscose','Cotton','Linen','Bemberg','Blends'] as const;
export const uses = ['Kaftan','Men','Women','Kids','Home Textile'] as const;
export const types = ['RFD','Digital Print','Specialty'] as const;
export type Fabric = { id: string; name: string; base: typeof bases[number]; type: typeof types[number]; uses: (typeof uses[number])[]; image: string; description: string };
const rfd = ['Fendi','Fendi Crush','Organza','Natural Crepe','Gold Crepe','Chinon','Glass Organza','Upada','Tissue'];
const digital: [string, Fabric['base']][] = [['Organza','Polyester'],['Natural Crepe','Viscose'],['Gold Crepe','Viscose'],['Chinon','Viscose'],['Glass Organza','Polyester'],['Poly Linen','Polyester'],['Poly Cambric','Polyester'],['Pure Pashmina Twill','Blends'],['Velvet','Blends'],['Bemberg','Bemberg'],['Organza Twill','Polyester'],['Rayon','Viscose'],['Poly Muslin','Polyester'],['Lotus Satin','Polyester'],['Summer Queen','Blends'],['Muslin','Cotton']];
export const fabrics: Fabric[] = [
 ...rfd.map((name,i): Fabric => ({id:`rfd-${name.toLowerCase().replaceAll(' ','-')}`,name,base:'Viscose',type:'RFD',uses:['Women','Kaftan','Kids'],image:i%3===0?hero:viscose,description:'Ready-for-dyeing viscose fabric for your next collection. Final composition, GSM, width and finish are confirmed with your sample and quotation.'})),
 ...digital.map(([name,base]): Fabric => ({id:`print-${name.toLowerCase().replaceAll(' ','-')}`,name:`${name} Digital Print`,base,type:'Digital Print',uses:['Women','Kaftan','Men','Kids','Home Textile'],image:print,description:'Bring your artwork to life with digital printing. Share the repeat, colours and application; fabric composition and print suitability are confirmed during sampling.'})),
 ...([['Bangalori Silk','Polyester'],['Rotto (Tent Fabric)','Polyester'],['Cotton Velvet','Cotton']] as const).map(([name,base]):Fabric=>({id:name.toLowerCase().replaceAll(' ','-'),name,base,type:'Specialty',uses:name.includes('Rotto')?['Home Textile']:['Men','Women','Kids','Home Textile'],image:embroidery,description:'Specialty fabric sourced to your end-use requirements. Ask for current availability, composition, sample options and a project-specific quotation.'}))
];
export function filterFabrics(query: string, base: string, type: string, use: string) { return fabrics.filter(f => f.name.toLowerCase().includes(query.toLowerCase()) && (!base || f.base===base) && (!type || f.type===type) && (!use || f.uses.includes(use as typeof uses[number]))); }
export const business = { name:'Binani Enterprises', phone:'+91 8460360600', phoneLink:'tel:+918460360600', email:'[EMAIL]', whatsapp:'', address:'[ADDRESS, SURAT]', hours:'[BUSINESS HOURS]', year:'2024' };
export const capacity = { pure:100000, polyester:30000 };
export const valueAdds = ['Embroidery','Jacquard','Hakoba','Brasso','Other'] as const;
export const categories = ["Men’s wear","Women’s wear","Kids’ wear",'Home textiles','Kaftans'] as const;
