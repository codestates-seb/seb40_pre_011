package Singleton.server.user.service;


import java.util.Optional;

import Singleton.server.exception.DataNotFoundException;
import Singleton.server.user.dto.SiteUserDto;
import Singleton.server.user.entity.SiteUser;
import Singleton.server.user.repository.UserRepository;
import lombok.*;
import org.modelmapper.ModelMapper;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;
    private final ModelMapper modelMapper;
//    private final PasswordEncoder passwordEncoder;

    private SiteUserDto of(SiteUser siteUser) {
        return this.modelMapper.map(siteUser, SiteUserDto.class);
    }

    public SiteUserDto create(String username, String email, String password) {
        SiteUser user = new SiteUser();
        user.setUsername(username);
        user.setEmail(email);
//        user.setPassword(passwordEncoder.encode(password));
        this.userRepository.save(user);
        return of(user);
    }

    public SiteUserDto getUser(String username) {
        Optional<SiteUser> siteUser = this.userRepository.findByusername(username);
        if (siteUser.isPresent()) {
            return of(siteUser.get());
        } else {
            throw new DataNotFoundException("siteuser not found");
        }
    }
}