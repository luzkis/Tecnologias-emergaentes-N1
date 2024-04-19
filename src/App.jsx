import React from 'react';
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Navbar from './components/Navbar';

const PageContainer = styled('div')({
  padding: '20px 50px',
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "left",
  color: theme.palette.text.secondary,
  position: 'relative'
}));

const HeartIcon = styled(FavoriteIcon)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  color: 'black',
  

}));

const PriceContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '76%', 
  left: '18%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  color: 'black',
  backgroundColor: 'white',
}));



const DiscountedPrice = styled(Typography)(({ theme }) => ({
  color: 'red',
}));

const OriginalPrice = styled(Typography)(({ theme }) => ({
  textDecoration: 'line-through',
  color: 'grey',
}));



function ProductItem({ name, category, colors, imageUrl, price, discount}) {

  const discountedPrice = discount ? price - (price * discount) : null;
  

 const formattedPrice = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0,
}).format(price);


const formattedDiscountedPrice = discountedPrice ? new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0,
}).format(discountedPrice) : null;

const ProductImage = styled('img')({
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'cover',
});

  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <Item>
      
        <HeartIcon />
        <ProductImage src={imageUrl} alt={name}   />
         <PriceContainer>
          {discount ? (
            <>
              <OriginalPrice variant="body2">{'$'+ formattedPrice}</OriginalPrice>
              <DiscountedPrice variant="body2">{'$'+ formattedDiscountedPrice}</DiscountedPrice>
            </>
          ) : (
            <Typography variant="body2">{'$'+ formattedPrice}</Typography>
          )}
        </PriceContainer>
        
        <Typography variant="h6" sx={{ fontSize: '14px', color: 'black' }}>{name}</Typography>
        <Typography variant="subtitle1" sx={{fontSize:'12px'}}>{category}</Typography>
        
        <Typography sx={{fontSize: '12px'}}>{colors} colores</Typography>
        
      </Item>
    </Grid>
  );
}

function App() {
  const products = [
     // Se añaden los productos que sean necesarios
    { name: 'CAMISETA ADICOLOR CLASSICS 3 RAYAS',  category: 'Hombre originals', colors: 9, imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/70268ea39a8440d4ab8faf12008edd13_9366/Camiseta_Adicolor_Classics_3_Rayas_Azul_IA4850_21_model.jpg', price:149950, discount:0.2 },

    { name: 'P CLA TEE', description: 'Descripción del producto 1', category: 'Hombre Originals', colors: 1, imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f2d166e8fd35431abf0d060158c42197_9366/P_CLA_TEE_Beige_IP3282_21_model.jpg', price:599950, discount:0.2 },

   
    { name: 'Camiseta Essentials Trifolio',  category: 'Hombre originals', colors: 4, imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fed78b4be09348919d5d66ae9bd94dc4_9366/Camiseta_Essentials_Trifolio_Negro_IR9690_21_model.jpg', price:139950 },

    
    { name: 'ADIZERO SNGLT M',  category: 'Hombre originals', colors: 1, imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/71e9660232eb49bebb330c1ab6d9c2e3_9366/ADIZERO_SNGLT_M_Naranja_IW6107_HM1.jpg', price:379950, discount: 0.3 },

    { name: 'Camiseta Own the Run',  category: 'Hombre Running', colors: 3, imageUrl: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/9694005b8abb4b8389cbe97ac595804a_9366/camiseta-own-the-run.jpg',price:198000, discount:0.5 },

    { name: 'Camiseta Essentials Trifolio',  category: 'Hombre originals', colors: 4, imageUrl: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/9122338aed5b4e8ab350110aaff0538f_9366/camiseta-essentials-trifolio.jpg', price:203900 },

    { name: 'Camiseta Adicolor',  category: 'Hombre originals', colors: 3, imageUrl: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/1f855fe76e3e4160b43889ab337aa7f2_9366/camiseta-adicolor.jpg', price: 185850 },

    { name: 'CAMISETA ESSENTIALS 3 RAYAS TEJIDO JERSEY',  category: 'Hombre Sportswear', colors: 8, imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2658e8be00f6490ba7f9703706d3f4f7_9366/Camiseta_Essentials_3_Rayas_Tejido_Jersey_Blanco_IS1337_21_model.jpg', price:239000 },
  ];

  return (
    
    
    <PageContainer>
      <Stack>
    <Navbar></Navbar> 
    </Stack>
    
    <Stack>
      
      <Grid container spacing={4} sx={{borderBlock: 'none'}} rowSpacing={0.5} columnSpacing={0.5}>
        {products.map((product, index) => (
          <ProductItem key={index} {...product} />
        ))}
      </Grid>
    </Stack>
    </PageContainer>
  );
}

export default App;