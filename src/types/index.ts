interface IdType {
  kind: string;
  etag: string;
  id: string;
}

interface RandomAdvice {
  id: number;
  advice: string;
}

interface LastVideo {
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    title: string;
    channelTitle: string;
  };
}

export { RandomAdvice, IdType, LastVideo };
