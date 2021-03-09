
import whoimg from "../../../../public/images/who.jpg";
// team
import delia from "../../../../public/images/team/delia.jpg";
import carlos from "../../../../public/images/team/carlos.jpg";
import miriam from "../../../../public/images/team/miriam.jpg";
import isabel from "../../../../public/images/team/isabel.jpg";
// servicios
//   Arquitectura
import obra_nueva from "../../../../public/images/servicios/arquitectura/obra_nueva.jpg";
import reformas from "../../../../public/images/servicios/arquitectura/reformas.jpg";
import rehabilitacion from "../../../../public/images/servicios/arquitectura/rehabilitacion.jpg";
import proyectos_int from "../../../../public/images/servicios/arquitectura/proyectos_int.jpg";
import proyectos_nac from "../../../../public/images/servicios/arquitectura/proyectos_nac.jpg";
import vivienda_modular from "../../../../public/images/servicios/arquitectura/vivienda_modular.jpg";
//   Interiorismo
import interiorismo from "../../../../public/images/servicios/interiorismo/interiorismo.jpg";
import diseno_grafico from "../../../../public/images/servicios/interiorismo/diseno_grafico.png";
import diseno_producto from "../../../../public/images/servicios/interiorismo/diseno_producto.png";
//   Inmobiliaria
import casas from "../../../../public/images/servicios/inmobiliaria/casas.jpg";
import terrenos from "../../../../public/images/servicios/inmobiliaria/terrenos.jpg";
import home_staging from "../../../../public/images/servicios/inmobiliaria/home_staging.jpg";


export function mates (id) {
    switch (id) {
        case "delia": return delia;
        case "carlos": return carlos;
        case "miriam": return miriam;
        case "isabel": return isabel;
    }
}

export function services (id) {
    switch (id) {
        case "obra_nueva": return obra_nueva;
        case "reformas": return reformas;
        case "rehabilitacion": return rehabilitacion;
        case "proyectos_int": return proyectos_int;
        case "proyectos_nac": return proyectos_nac;
        case "vivienda_modular": return vivienda_modular;
        case "interiorismo": return interiorismo;
        case "diseno_grafico": return diseno_grafico;
        case "diseno_producto": return diseno_producto;
        case "casas": return casas;
        case "terrenos": return terrenos;
        case "home_staging": return home_staging;
    }
}


export function whoImg(){
    return whoimg;
}