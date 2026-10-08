interface ProfessionalContact {
    name: string;
    email: string;
    phoneNumber: string;
}

interface ContactContent {
    Title: string;
    Description: string;
    CompanyInfoTitle: string;
    CompanyName: string;
    CompanyPhoneNumber: string;
    CompanyEmail: string;
    ProfessionalsTitle: string;
    Professionals: ProfessionalContact[];
}

export class placeholder {
    "bg": ContactContent = {
        Title: "Контакти",
        Description: "Свържете се с нас за счетоводни услуги и консултации.",
        CompanyInfoTitle: "Фирмена информация",
        CompanyName: "С и К счетоводство",
        CompanyPhoneNumber: "+359 88 123 4567",
        CompanyEmail: "office@sk-accounting.bg",
        ProfessionalsTitle: "Нашите специалисти",
        Professionals: [
            {
                name: "Светлана Костова",
                email: "svetlana@sk-accounting.bg",
                phoneNumber: "+359 88 111 2222",
            },
            {
                name: "Красимир Иванов",
                email: "krasimir@sk-accounting.bg",
                phoneNumber: "+359 88 333 4444",
            },
        ],
    };

    "eng": ContactContent = {
        Title: "Contact",
        Description: "Get in touch with us for accounting services and consultations.",
        CompanyInfoTitle: "Company Information",
        CompanyName: "S and K Accounting",
        CompanyPhoneNumber: "+359 88 123 4567",
        CompanyEmail: "office@sk-accounting.bg",
        ProfessionalsTitle: "Our Professionals",
        Professionals: [
            {
                name: "Svetlana Kostova",
                email: "svetlana@sk-accounting.bg",
                phoneNumber: "+359 88 111 2222",
            },
            {
                name: "Krasimir Ivanov",
                email: "krasimir@sk-accounting.bg",
                phoneNumber: "+359 88 333 4444",
            },
        ],
    };
}
