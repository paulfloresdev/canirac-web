import { Footer } from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ChamberMemberSection from "../../components/home/chamber-members/ChamberMembersSection";
import MembershipSection from "../../components/home/memberships/MembershipsSection";
import HomeVideo from "../../components/home/video/HomeVideo";
import { useLanguage } from "../../context/LanguageContext";

const Home: React.FC = () => {
    const { language } = useLanguage();

    return (
        <>
            <div className="flex flex-col min-h-screen w-full h-auto bg-background dark:bg-background-dark">
                <Header page={0} isMutable={true} />
                <HomeVideo />
                <div className="w-content mx-auto flex-grow">
                    {/* About */}
                    <div className="my-6 lg:my-8 xl:my-8 space-y-2">
                        <div className="flex flex-col items-center justify-center space-y-1 mb-4">
                            <span className="font-normal text-base lg:text-lg xl:text-lg">CANIRAC La Paz</span>
                            <span className="text-justify leading-relaxed">
                                {language === 'es' ? 'La Cámara Nacional de la Industria de Restaurantes y Alimentos Condimentados (CANIRAC) es el organismo empresarial que representa, integra, educa, promueve y defiende los intereses de la industria restaurantera, mediante la interlocución con el gobierno y demás sectores afines.' : 'The National Chamber of the Restaurant and Seasoned Food Industry (CANIRAC) is the business organization that represents, integrates, educates, promotes, and defends the interests of the restaurant industry through dialogue with the government and other related sectors.'}
                            </span>
                        </div>
                        <div className="flex flex-col space-y-2 lg:space-y-0 xl:space-y-0 lg:flex-row xl:flex-row lg:space-x-4 xl:space-x-8">
                            <div className="flex flex-col items-center justify-center space-y-1">
                                <span className="font-normal text-base lg:text-lg xl:text-lg">{language === 'es' ? 'Misión' : 'Mission'}</span>
                                <span className="text-justify leading-relaxed">
                                    {language === 'es' ? 'Ser una organización empresarial de carácter nacional, que representa, integra, educa, promueve y defiende los intereses de la industria restaurantera mediante la interlocución con el Gobierno y demás sectores.' : 'To be a national business organization that represents, integrates, educates, promotes, and defends the interests of the restaurant industry through dialogue with the government and other sectors.'}
                                </span>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-1">
                                <span className="font-normal text-base lg:text-lg xl:text-lg">{language === 'es' ? 'Visión' : 'Vision'}</span>
                                <span className="text-justify leading-relaxed">
                                    {language === 'es' ? 'Ser una cámara eficiente, moderna, respetable, influyente en la opinión pública y comprometida con la preservación, investigación y difusión de las tradiciones gastronómicas de México.' : 'To be an efficient, modern, respectable chamber, influential in public opinion, and committed to the preservation, research, and promotion of Mexico\'s gastronomic traditions.'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Memberships */}
                <MembershipSection />
                {/* Chamber members */}
                <ChamberMemberSection />
                {/* Footer */}
                <Footer />
            </div>
        </>
    );
};

export default Home;
