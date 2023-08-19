//package com.ein.crm.security;
//
//import com.ein.crm.domain.member.Member;
//import com.ein.crm.domain.member.MemberRepository;
//import org.springframework.security.authentication.AuthenticationProvider;
//import org.springframework.security.authentication.BadCredentialsException;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.AuthenticationException;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import java.util.ArrayList;
//import java.util.Collection;
//
//@Service
//public class CustomAuthenticationProvider implements AuthenticationProvider {
//
//    private final MemberRepository memberRepository;
//    private final PasswordEncoder passwordEncoder;
//
//    public CustomAuthenticationProvider(MemberRepository memberRepository, PasswordEncoder passwordEncoder) {
//        this.memberRepository = memberRepository;
//        this.passwordEncoder = passwordEncoder;
//    }
//    @Override
//    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
//        String username = authentication.getName();
//        String password = authentication.getCredentials().toString();
//        Member member = memberRepository.findByUsername(username);
//
//        if(passwordEncoder.matches(password , member.getPassword())){
//            System.out.println("성공");
//        }
//
//
//        if (member == null || !passwordEncoder.matches(password, member.getPassword())) {
//            System.out.println("실패");
//            throw new BadCredentialsException("비밀번호가 틀렸습니다.");
//        }
//
//        Collection<GrantedAuthority> authorities = new ArrayList<>();
//        authorities.add(new SimpleGrantedAuthority("ROLE_" + member.getRole()));
//
//        return new UsernamePasswordAuthenticationToken(username, password, authorities);    }
//
//    @Override
//    public boolean supports(Class<?> authentication) {
//        return UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication);
//    }
//}
