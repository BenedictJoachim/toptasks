import { useEffect, useState } from "react"
import { AppwriteService } from "../services/AppwwriteServices";
import { User } from "../types";

export const useAuth = () => {
    const [user, setUser] = useState<User>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const currentUser = await AppwriteService.getCurrentUser();
                setUser(currentUser);
            } catch (error) {
                setUser(null)
            } finally {
                setIsLoading(false);
            }
        };

        fetchUser();
    }, []);

    return { user, isLoading };
}