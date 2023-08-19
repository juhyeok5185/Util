package com.ein.crm.config;

import com.ein.crm.security.LoginFailHandler;
import com.ein.crm.security.LoginSuccessHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.*;
import org.springframework.context.annotation.*;
import org.springframework.security.config.annotation.method.configuration.*;
import org.springframework.security.config.annotation.web.builders.*;
import org.springframework.security.config.annotation.web.configuration.*;
import org.springframework.security.web.*;


@EnableMethodSecurity(securedEnabled = true)
@EnableWebSecurity
@Configuration
@RequiredArgsConstructor
public class SecurityConfig {

    private final LoginSuccessHandler loginSuccessHandler;
    private final LoginFailHandler loginFailHandler;
    //private final CustomAuthenticationProvider authenticationProvider;


    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf().disable()
                //.authenticationProvider(authenticationProvider) // Custom AuthenticationProvider 등록
                .formLogin()
                .loginPage("/api/crm/login")
                .loginProcessingUrl("/api/crm/login")
                .successHandler(loginSuccessHandler)
                .failureHandler(loginFailHandler)
                .and()
                .logout()
                .logoutUrl("/api/crm/logout")
                .logoutSuccessUrl("/api/crm/login")
                .deleteCookies("JSESSIONID");
        return http.build();
    }
}
