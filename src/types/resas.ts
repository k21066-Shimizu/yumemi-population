export type FetchResasApi = {
  (path: 'api/v1/prefectures', params?: undefined): Promise<Resas<Prefecture[]>>;
  (path: 'api/v1/poplation/composition/perYear', params: PopulationCompositionParams): Promise<
    Resas<PopulationComposition>
  >;
  (path: string, params?: object): Promise<unknown>;
};

export type Resas<T> = {
  message: null;
  result: T;
};

export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export type PopulationCompositionParams = {
  prefCode: number;
  cityCode: number | '-';
  addArea?: string[];
};

export type PopulationComposition = {
  boundaryYear: number;
  data: (
    | {
        label: '総人口';
        data: {
          year: number;
          value: number;
        }[];
      }
    | {
        label: '年少人口' | '生産年齢人口' | '老年人口';
        data: {
          year: number;
          value: number;
          rate: number;
        }[];
      }
  )[];
};
