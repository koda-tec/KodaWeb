import ContactForm from "./ContactForm";

export default function ContactSection(){
    return(
        <section id="contacto" className="py-20 px-4 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-koda-dark mb-4">
                    ¿Listo para tu proyecto?
                </h2>
                <p className="text-gray-600 mb-8">
                    Solicita tu cotización sin compromiso
                </p>
                <ContactForm/>
            </div>
        </section>
    );
}