import { MessageCircle } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { business } from '@/data/fabrics';
export function WhatsAppFloat(){return <Button asChild size="icon" className="fixed bottom-5 right-5 z-40 size-12 rounded-full bg-whatsapp text-whatsapp-foreground shadow-card hover:bg-whatsapp/90">{business.whatsapp?<a href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"><MessageCircle className="size-6"/></a>:<Link to="/contact" aria-label="Contact us — WhatsApp number pending"><MessageCircle className="size-6"/></Link>}</Button>}
