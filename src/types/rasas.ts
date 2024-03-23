export type FetchRasasApi = {
  (path: 'api/v1/prefectures'): Promise<Rasas<Prefectures>>;
  (path: string): Promise<unknown>;
};

export type Rasas<T> = {
  message: null;
  result: T;
};

export type Prefectures = {
  prefCode: number;
  prefName: string;
}[];
