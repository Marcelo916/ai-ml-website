import { fileURLToPath } from "url";
import { dirname, join } from "path";

class AssetFolderFinder {

  static getAssetFolder() {
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = dirname(__filename);
      return join(__dirname, '../../assets/quotes.json')
  }
}

export default AssetFolderFinder;
