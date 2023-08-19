
import java.util.UUID;

public class Util {
    public static String randomFileName(String originalFileName, String username) {
        int lastDotIndex = originalFileName.lastIndexOf(".");
        String fileExtension = originalFileName.substring(lastDotIndex + 1);
        String uuid = UUID.randomUUID().toString().replace("-", "");
        return username + uuid + "." + fileExtension;
    }
}
