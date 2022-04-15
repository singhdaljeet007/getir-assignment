interface Record {
  key: string;
  value: string;
  createdAt: Date;
  counts: Array<number>;
}

interface SearchRequest {
  startDate: Date;
  endDate: Date;
  minCount: number;
  maxCount: number;
}

export { Record, SearchRequest };
