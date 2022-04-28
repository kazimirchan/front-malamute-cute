import useTranslation from "next-translate/useTranslation"
import Slider from "../../components/Slider"

export default function MainSection() {
    const { t } = useTranslation("home")
    return (
        <main className="main-section">
            <div className="left">
                <h1>Made<br/>With<br/>Love</h1>
                {/* <h1>{t("main-block__title")}</h1> */}
            </div>
            <div className="right">
                <Slider/>
            </div>
        </main>
    )
}