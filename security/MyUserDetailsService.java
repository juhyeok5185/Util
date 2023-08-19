package com.ein.crm.security;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.NoSuchElementException;

import com.ein.crm.domain.member.Member;
import com.ein.crm.domain.member.MemberRepository;
import com.ein.crm.enums.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class MyUserDetailsService implements UserDetailsService {
    @Autowired
    private MemberRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        try {
            Member member = repository.findByUsername(username);
            if (member == null) {
                throw new UsernameNotFoundException("사용자를 찾을 수 없습니다");
            }

            String role = "ROLE_" + Role.fromNum(member.getRole());
            Collection<GrantedAuthority> list = new ArrayList<>();
            list.add(new SimpleGrantedAuthority(role));
            return new MyUserDetails(username, member.getPassword(), true, list);
        } catch (NoSuchElementException e) {
            throw new UsernameNotFoundException("사용자를 찾을 수 없습니다");
        }
    }

}