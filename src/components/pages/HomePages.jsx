import React from "react";

import NavigationMolecules from "../molecules/NavigationMolecules";
import HeroMolecules from "../molecules/HeroMoleculels";
import NavigationMenuMolecules from "../molecules/NavigationMenuMolecules";
import CardMolecules from "../molecules/CardMolecules";
import FooterOrganisms from "../organisms/FooterOrganisms";
import CardProductMolecules from "../molecules/CardProductMolecules";

const HomePages = () => {
    return (
        <div>
            <HeroMolecules></HeroMolecules>
            <CardMolecules></CardMolecules>
            <CardProductMolecules></CardProductMolecules>
            <FooterOrganisms></FooterOrganisms>
            <NavigationMolecules></NavigationMolecules>
            <NavigationMenuMolecules></NavigationMenuMolecules>
        </div>
    );
};

export default HomePages;