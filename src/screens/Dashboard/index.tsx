import React from "react";

import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";
 
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

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'negative',
      title:"Conta de luz",
      amount:"R$ 17.500,00",
      category:{
        name: "Energia",
        icon: "dollar-sign"
      },
      date:"13/04/2020",
    },
    {
      id: '2',
      type: 'positive',
      title:"Conta de luz",
      amount:"R$ 500,00",
      category:{
        name: "Energia",
        icon: "dollar-sign"
      },
      date:"13/04/2020",
    },
    {
      id: '3',
      type: 'positive',
      title:"Conta de luz",
      amount:"R$ 555,00",
      category:{
        name: "Energia",
        icon: "dollar-sign"
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
          amount="R$ 500,00" 
          lastTransaction="Última saída dia 13 de abril"
        />
        <HighlightCard 
          type="total"
          title="Total" 
          amount="R$ 100,00" 
          lastTransaction="01 à 16 de abril"
        />        
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={data}
          keyExtractor={ item => item.id }
          renderItem={({ item }) => <TransactionCard data={item}/>}
        />
          
      </Transactions>
    </Container>
  )
}