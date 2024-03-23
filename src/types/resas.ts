export type FetchResasApi = {
  (path: 'api/v1/prefectures'): Promise<Resas<Prefectures>>;
  (path: string): Promise<unknown>;
};

export type Resas<T> = {
  message: null;
  result: T;
};

export type Prefectures = {
  prefCode: number;
  prefName: string;
}[];
