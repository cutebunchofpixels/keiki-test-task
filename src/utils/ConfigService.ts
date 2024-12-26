class ConfigService {
  public getOrThrow(key: string): string {
    const value = import.meta.env[key];

    if (!value) {
      throw new Error(`No configuration value was found for key ${key}`);
    }

    return value;
  }
}

export const configService = new ConfigService();
