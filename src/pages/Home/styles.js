import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: red;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})`
  align-self: center;
  margin-top: 60px;
  padding: 20px;
`;
