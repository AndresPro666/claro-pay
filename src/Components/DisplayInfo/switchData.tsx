import { Label, Content, State, VerticallDivisor } from "../../Common/Grid/Index"
import Badged from "../Badged";
import Icon from "../Icon"



export const switchData = ({ label, content, type, active, line, color, bgColor }: any) => {
    
    switch (type) {
        case "label":
            return (
                <>
                    <Label>{label}</Label>
                    <Content color={active}>{content}</Content>
                    {line && <VerticallDivisor />}
                </>);

        case "icon":
            return <Icon color={'#ffffff'} backColor={"#57b4e5"} name={"bi bi-person-fill"} />

        case "badge":
            return <Badged color={color} backColor={bgColor} icon={"bi bi-person-fill"} text={content}/>

        case "state":
            return <State>{content}</State>;
    }
}


