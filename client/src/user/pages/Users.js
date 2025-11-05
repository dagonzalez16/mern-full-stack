import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Carlos Mendoza",
      image:
        "https://media.istockphoto.com/id/1398385367/photo/happy-millennial-business-woman-in-glasses-posing-with-hands-folded.jpg?s=2048x2048&w=is&k=20&c=DwdvdTOzngjSfwKLDDPqKbuBd3hYoCm9Oy93-lvO6Vc=",
      places: 5,
    },
    {
      id: "u2",
      name: "Laura Fernández",
      image:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=2048x2048&w=is&k=20&c=8QovDK9XochFpaIC-N3pn5EEaRSVuE1SKpQDVUxLSUk=",
      places: 8,
    },
    {
      id: "u3",
      name: "Andrés López",
      image:
        "https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?s=2048x2048&w=is&k=20&c=0HU1oQGXlO4nrrMKKzAK4Jmu6XDLvXhTGjKScvrNIZw=",
      places: 2,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;