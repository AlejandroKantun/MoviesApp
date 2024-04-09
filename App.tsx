import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/NavigationStack';
import { GradientProvider } from './src/context/GradientContext';

const AppState =({children}: any)=>{
  return(
    <GradientProvider>
      {children}
    </GradientProvider>
  )
}

const App=()=> {
  return (
    <NavigationContainer>
      <AppState>
            <StackNavigator/>
      </AppState>
    </NavigationContainer>
  );
}

export default App;