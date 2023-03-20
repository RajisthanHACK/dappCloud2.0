import React, { useCallback, useState } from "react"; 
import styled from "styled-components";
import AddressShare from "../../Components/AddressShare";

const Dashboard = ({contract}) => {
//   const [images, setImages] = useState([]);
//   const onDrop = useCallback((acceptedFiles) => {
//     acceptedFiles.map((file) => {
//       const reader = new FileReader();
//       reader.onload = function (e) {
//         setImages((prevState) => [
//           ...prevState,
//           { id: cuid(), src: e.target.result },
//         ]);
//       };
//       reader.readAsDataURL(file);
//       return file;
//     });
//   }, []);

  return (
    <DashSection>
        <h2>Dashboard</h2>
        <Grid>
            <AddressShare contract={contract}/>
        </Grid>
    </DashSection>
  );
};

const DashSection = styled.div`
width: 100%;
max-width: 1140px;
height: 100vh;
margin: 0 auto;
padding: 3rem 1rem 0;

h2{
    font-size: 1.5rem;
    color: #212020;
}
`;

const Grid = styled.div`
display: grid;
grid-template-columns: 30% 70%;
`;

export default Dashboard;
