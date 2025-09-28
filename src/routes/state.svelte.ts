const placeholder: string = "[PLACEHOLDER]";

export const lang = $state({
    gitHub: "GitHub",
    contact: placeholder,
    about: placeholder,
    foooterMessage: placeholder,
    home: placeholder,
    contactMessage: placeholder,
    aboutMessage: placeholder,
    change: function (value: "en" | "de") {
        if (value === "de") {
            this.contact = "Kontakt";
            this.about = "Über";
            this.foooterMessage = "Diese Seite verwendet keinerlei Cookies. Darum wird hier auch kein Cookie-Banner angezeigt.";
            this.home = "Zurück"
            this.contactMessage = "Einfach eine E-Mail senden an";
            this.aboutMessage = "In Bearbeitung...";
        }
        else {
            this.contact = "Contact";
            this.about = "About";
            this.foooterMessage = "This site is not using any cookies at all. That's why you see no cookie-consent-banner here.";
            this.home = "Home";
            this.contactMessage = "Just send some e-mail to";
            this.aboutMessage = "Under construction...";
        }
    }
});
