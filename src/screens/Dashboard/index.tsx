import React from "react";
import { getBottomSpace } from "react-native-iphone-x-helper";

import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";
 
import { 
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList
 } from "./styles";

export function Dashboard() {
  const data = [
  {
    title:"Conta de luz",
    amount:"R$ 17.500,00",
    category:{
    name: "Energia",
    icon: "lightbulb"
    },
    date:"13/04/2020",
  },
  {
    title:"Conta de luz",
    amount:"R$ 17.500,00",
    category:{
    name: "Energia",
    icon: "lightbulb"
    },
    date:"13/04/2020",
  },
  {
    title:"Conta de luz",
    amount:"R$ 17.500,00",
    category:{
    name: "Energia",
    icon: "lightbulb"
    },
    date:"13/04/2020",
  },
]
  return (
    <Container>
      <Header>   
        <UserWrapper>     
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/43477835?v=4'}}/>
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Bruno</UserName>
            </User>
          </UserInfo>  
          
          <Icon name="power"/>
        </UserWrapper>    
      </Header>

      <HighlightCards>
        <HighlightCard 
          type="up"
          title="Entradas" 
          amount="R$ 17.500,00" 
          lastTransaction="Última entrada dia 13 de abril"
          />
        <HighlightCard 
          type="down"
          title="Saidas" 
          amount="R$ 17.500,00" 
          lastTransaction="Última saída dia 13 de abril"
        />
        <HighlightCard 
          type="total"
          title="Total" 
          amount="R$ 17.500,00" 
          lastTransaction="01 à 16 de abril"
        />        
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={data}
          renderItem={({ item }) => <TransactionCard data={item}/>}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ 
            paddingBottom: getBottomSpace()
          }}
        />
          
      </Transactions>
    </Container>
  )
}