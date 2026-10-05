interface ValueItem {
    title: string;
    description: string;
}

interface AboutContent {
    About: string;
    Description: string;
    ValuesTitle: string;
    Values: ValueItem[];
}

export class placeholder {
    "bg": AboutContent = {
        About: "Относно",
        Description: "Страница относно сайта",
        ValuesTitle: "Нашите ценности",
        Values: [
            {
                title: "Опит",
                description:
                    "С 25 години професионален, практически опит в счетоводството сме подкрепяли бизнеси през растеж, одити и постоянно променящи се финансови регулации, изграждайки експертиза, която идва само с десетилетия работа в практиката.",
            },
            {
                title: "Надеждност",
                description:
                    "Нашата надеждност е доказана чрез дългогодишни партньорства с утвърдени организации като Megatron, Defense и Isha Asha, които разчитат на нас за последователни, точни и сигурни счетоводни услуги година след година.",
            },
            {
                title: "Индивидуален подход",
                description:
                    "Работим директно с индивидуални клиенти, отделяйки време да разберем уникалната финансова ситуация на всеки един от тях и адаптирайки услугите си спрямо конкретните им нужди, вместо да предлагаме универсални решения.",
            },
            {
                title: "Прозрачност",
                description:
                    "Вярваме, че прозрачността се изгражда чрез постоянна комуникация — нашите клиенти могат да се свържат с нас във всеки работен ден, а ние се грижим цялата финансова информация, решения и процеси да бъдат комуникирани ясно и без скрити изненади.",
            },
        ],
    };

    "eng": AboutContent = {
        About: "About",
        Description: "About page for the site",
        ValuesTitle: "Our Values",
        Values: [
            {
                title: "Experience",
                description:
                    "With 25 years of professional, hands-on accounting experience, we have supported businesses through growth, audits, and ever-changing financial regulations, building the kind of practical expertise that only decades in the field can provide.",
            },
            {
                title: "Reliability",
                description:
                    "Our reliability is proven through long-standing partnerships with established organizations such as Megatron, Defense, and Isha Asha, who rely on us for consistent, accurate, and dependable accounting services year after year.",
            },
            {
                title: "Personalized Approach",
                description:
                    "We work directly with individual clients, taking the time to understand each person's unique financial situation and tailoring our services to fit their specific needs rather than offering one-size-fits-all solutions.",
            },
            {
                title: "Transparency",
                description:
                    "We believe transparency is built through consistent communication — our clients can reach us on every business day, and we make sure all financial information, decisions, and processes are communicated clearly and without hidden surprises.",
            },
        ],
    };
}
