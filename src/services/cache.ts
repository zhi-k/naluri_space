import NodeCache, { Options, Key } from "node-cache";

interface ICacheServiceOptions {
	ttl?: number;
	maxKeys?: number;
}

export default class CacheService {
	private cache: NodeCache;

	constructor(options: ICacheServiceOptions) {
		const nodeCacheOptions: Options = {
			checkperiod: 60, // in seconds
		};

		if (options.ttl) {
			nodeCacheOptions.stdTTL = options.ttl;
		}

		if (options.maxKeys) {
			nodeCacheOptions.maxKeys = options.maxKeys;
		}

		this.cache = new NodeCache(nodeCacheOptions);
	}

	set<T = unknown>(key: Key, value: T) {
		this.cache.set(key, value);
	}

	get<T = unknown>(key: Key): T | null | undefined {
		return this.cache.get(key);
	}
}