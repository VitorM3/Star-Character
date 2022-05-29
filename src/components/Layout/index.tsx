import { IComponentsBase } from "../../models/interface/componentsBase";
import Header from "./Header";
import { Content, LayoutBase } from "./styled";

const Layout = ({ children }: IComponentsBase) => {
    return (
        <LayoutBase>
            <Header />
            <Content>
                {children}
            </Content>
        </LayoutBase>
    );
}

export default Layout