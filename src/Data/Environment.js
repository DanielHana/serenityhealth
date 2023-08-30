const isLive = true;

const prod =
{
    apiKey: 'AIzaSyDO9TMtIx-AXQKGiIAF7K2UN8hA7Vo9Ao4',
    isLive: isLive
}

const dev = {
  apiKey: 'AIzaSyDO9TMtIx-AXQKGiIAF7K2UN8hA7Vo9Ao4',
  isLive: !isLive
}

export { dev, prod };
