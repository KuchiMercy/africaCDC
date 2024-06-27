import executive from "../assets/exeOfffice.png";
import admin from "../assets/adminManagement.png";
import health from "../assets/pubHealth.png";
import policy from "../assets/diplomacy.png";
import lab from "../assets/lab.png";
import emergency from "../assets/emergency.png";
import disease from "../assets/survellance.png";
import control from "../assets/diseaseControl.png";
import offices from "../assets/rccOffices.png";
import helpDesk from "../assets/helpDesk.png";

const data = [
  {
    id: "1",
    icon: { src: executive },
    title: "Executive Office",
    link: "https://tools.africacdc.org/eo.php",
  },
  {
    id: "2",
    icon: { src: admin },
    title: "Administration and Management",
    link: "https://tools.africacdc.org/madmin.php",
  },
  {
    id: "3",
    icon: { src: health },
    title: "Public Health Institute and Research",
    link: "https://tools.africacdc.org/phi.php",
  },
  {
    id: "4",
    icon: { src: policy },
    title: "Policy, Health Diplomacy & Communication",
    link: "https://tools.africacdc.org/hd.php",
  },
  {
    id: "5",
    icon: { src: lab },
    title: "Laboratory Systems & Networks",
    link: "https://tools.africacdc.org/lab.php",
  },
  {
    id: "6",
    icon: { src: emergency },
    title: "Emergency Preparedness & Response",
    link: "https://tools.africacdc.org/epr.php",
  },
  {
    id: "7",
    icon: { src: disease },
    title: "Surveillance & Disease Intelligence",
    link: "https://tools.africacdc.org/sdi.php",
  },
  {
    id: "8",
    icon: { src: control },
    title: "Disease Control and Prevention",
    link: "https://tools.africacdc.org/dis.php",
  },
  {
    id: "9",
    icon: { src: offices },
    title: "RCC Offices",
    link: "https://tools.africacdc.org/rcchskh/",
  },
  {
    id: "10",
    icon: { src: helpDesk },
    title: "HelpDesk",
    link: "https://helpdesk.africacdc.org/",
  },
];

export default data;
