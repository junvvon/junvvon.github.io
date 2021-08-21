import { RouteComponentProps } from 'react-router';

export interface MatchParams {
  title: string;
}

export interface RouterProps extends RouteComponentProps<MatchParams> {}
