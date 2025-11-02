export type RooteStackParamList = {
  home: undefined;
  product: undefined
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RooteStackParamList {}
  }}